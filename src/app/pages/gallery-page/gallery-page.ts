import { Component, signal, computed, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { DICT } from '@dict';
import { PhotoCard } from 'src/app/components/photo-card/photo-card';
import { MUSIC_FILES } from 'src/app/data/music';
import { PHOTOS, PhotoContent } from 'src/app/data/gallery';

@Component({
  selector: 'gallery-page',
  imports: [PhotoCard],
  templateUrl: './gallery-page.html',
})
export default class GalleryPage implements AfterViewInit, OnDestroy {

  dict = DICT;

  protected readonly isPlaying = signal(true);
  protected readonly photoContent = PHOTOS;
  protected readonly selectedIndex = signal<number | null>(null);
  protected readonly selectedPhoto = computed(() => {
    const i = this.selectedIndex();
    return i !== null ? this.photoContent[i] : null;
  });

  protected readonly slideshowActive = signal(false);
  protected readonly slideshowPhoto = signal<PhotoContent | null>(null);
  protected readonly previousPhoto = signal<PhotoContent | null>(null);
  protected readonly slideKey = signal(0);
  private slideshowTimer: ReturnType<typeof setInterval> | null = null;
  private slideshowQueue: PhotoContent[] = [];
  private queueIndex = 0;

  private audio: HTMLAudioElement | null = null;
  private readonly musicFiles = MUSIC_FILES;
  protected readonly songTitle = signal('');

  ngAfterViewInit(): void {
    this.startMusic();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
    this.stopMusic();
  }

  @HostListener('document:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    if (this.selectedIndex() === null) return;
    switch (event.key) {
      case 'ArrowRight':
        this.next();
        break;
      case 'ArrowLeft':
        this.prev();
        break;
      case 'Escape':
        this.closeLightbox();
        break;
    }
  }

  protected openLightbox(index: number): void {
    this.selectedIndex.set(index);
  }

  protected closeLightbox(): void {
    this.selectedIndex.set(null);
  }

  protected next(): void {
    const i = this.selectedIndex();
    if (i === null) return;
    this.selectedIndex.set((i + 1) % this.photoContent.length);
  }

  protected prev(): void {
    const i = this.selectedIndex();
    if (i === null) return;
    this.selectedIndex.set((i - 1 + this.photoContent.length) % this.photoContent.length);
  }

  protected startSlideshow(): void {
    this.shuffleQueue();
    this.slideshowActive.set(true);
    this.showRandomSlide();
    this.slideshowTimer = setInterval(() => this.showRandomSlide(), 3000);
  }

  private shuffleQueue(): void {
    this.slideshowQueue = [...this.photoContent];
    for (let i = this.slideshowQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.slideshowQueue[i], this.slideshowQueue[j]] = [this.slideshowQueue[j], this.slideshowQueue[i]];
    }
    this.queueIndex = 0;
  }

  private showRandomSlide(): void {
    const current = this.slideshowPhoto();
    if (current) {
      this.previousPhoto.set(current);
      setTimeout(() => this.previousPhoto.set(null), 800);
    }
    if (this.queueIndex >= this.slideshowQueue.length) {
      this.shuffleQueue();
    }
    this.slideshowPhoto.set(this.slideshowQueue[this.queueIndex]);
    this.queueIndex++;
    this.slideKey.update(v => v + 1);
  }

  protected stopSlideshow(): void {
    this.slideshowActive.set(false);
    this.slideshowPhoto.set(null);
    this.previousPhoto.set(null);
    if (this.slideshowTimer) {
      clearInterval(this.slideshowTimer);
      this.slideshowTimer = null;
    }
  }

  protected toggleMusic(): void {
    if (this.isPlaying()) {
      this.audio?.pause();
      this.isPlaying.set(false);
    } else {
      this.audio?.play().then(() => this.isPlaying.set(true)).catch(() => {});
    }
  }

  private startMusic(): void {
    this.audio = new Audio();
    this.audio.volume = 0.70;
    this.audio.addEventListener('playing', () => this.isPlaying.set(true));
    this.audio.addEventListener('pause', () => this.isPlaying.set(false));
    this.audio.addEventListener('ended', () => this.playRandom());
    this.playRandom();
  }

  private playRandom(): void {
    if (!this.audio) return;
    const randomIndex = Math.floor(Math.random() * this.musicFiles.length);
    const fileName = this.musicFiles[randomIndex];
    this.audio.src = `./music/${fileName}`;
    this.audio.load();
    this.audio.play().catch(() => this.isPlaying.set(false));

    this.songTitle.set(fileName.replace(/\.mp3$/i, '').replace(/-/g, ' '));
  }

  private stopMusic(): void {
    this.audio?.pause();
    this.audio = null;
    this.isPlaying.set(false);
  }

}
