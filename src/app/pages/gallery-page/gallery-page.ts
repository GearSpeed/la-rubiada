import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { PhotoCard } from 'src/app/components/photo-card/photo-card';

interface PhotoContent {

  urlPhoto: string,
  demo: boolean

}


@Component({
  selector: 'gallery-page',
  imports: [PhotoCard],
  templateUrl: './gallery-page.html',
})
export default class GalleryPage {

  envs = environment

  photoContent: PhotoContent[] = [
    {
      urlPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjzaom0APM8HQm4OB3YDFBvL2Wh_KuvmD6SA_8LdL9FXGuwChVRbBR3mIgpS9yAmxEaA3RqNgtjyWczDpK3Ol5gYlr26X4YOiOy7k-WsaPxk9qx6ugxsSdY7iPNav0zmnGzm1mSyS4gJ7nSJnjfoiNwMsQH0NFAUtSKAjKYmBjfXCzHm9xpkL94IYL8r-RA4bkF2yckOSjIoAwQQL0Ac6fgay-W-skj6nrv8WJ1V60mPhKS0dZs-8I2PGTDVHelCE7rPw09wFOYslw',
      demo: true
    },
    {
      urlPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOQh3Vq0Aj8lJSTALy3ehRlzcgQE05o98L7569ix6vnOhNIIMXbWU-QzXYgMVh9HkSdBH2gUH4ZcyVFCyZiZapeWtgNOPuTW5KdQIn3sV4rMLVNk2O9SilOkQ8rBN0gT4CAOQIXKhofx11d7x6D2-_pJU8btWycLL0jkmERw7oaCL3iCJZmjeMBWk8LfCbgPZhvCWCDiWqlPTOsuNqNcnz3MR9NIjlH2pnA-92VlRXtf1ibVvsqijIixXIBfJTfpkwBPANn7AsbTlE',
      demo: true
    },
    {
      urlPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeUorDAh-be0BdO5IXIcdS4QuJa-0KSkRLWa2l1xuHIwemPCVW3CRe6Iu7zJiG3ej5ipQoLSFmnw3q3tdoN4v14Rh_anW8yFgTqhkUe-sNPnq-iWsHE8dAjq1hZ1uSVIsD89zJ7Swie0FvAiHR6baLZBDZMpQF9rdNcef8__a-kxjKQWQGvuyplX-FziYX4CMvdLV9PuOA0RSouP3mWN1aKCLh_E6I5287Tme3rYfX80F6L1RdcxdV4NO0gYEiedXN8b79pyILCfIQ',
      demo: true
    },
  ]

}
