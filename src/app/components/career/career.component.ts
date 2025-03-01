import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit, OnDestroy {
  photos = [
    { src: 'https://live.staticflickr.com/65535/54248318230_2a475aa538_z.jpg', alt: 'Gallery Image 2' },
    { src: 'https://live.staticflickr.com/65535/53616255838_fbf6984ffe_z.jpg', alt: 'Gallery Image 3' },
    { src: 'https://live.staticflickr.com/65535/53616390639_f15e8305a3.jpg', alt: 'Gallery Image 4' },
    { src: 'https://live.staticflickr.com/65535/54248129648_0617713157.jpg', alt: 'Gallery Image 1' },
    { src: 'https://live.staticflickr.com/65535/54247890726_348d4e6c99_c.jpg', alt: 'Gallery Image 2' },
    { src: 'https://live.staticflickr.com/65535/54247892981_2e37aa85d6_n.jpg', alt: 'Gallery Image 3' },
    { src: 'https://live.staticflickr.com/65535/54248141659_40c04f5b25_w.jpg', alt: 'Gallery Image 4' },
  ];

  isModalOpen = false;
  modalImage: { src: string; alt: string } | null = null;
  private intervalId: any;

  ngOnInit(): void {
    // this.intervalId = setInterval(() => {
    //   this.photos.push(this.photos.shift()!);
    // }, 2000);
  }

  ngOnDestroy(): void {
    // if (this.intervalId) {
    //   clearInterval(this.intervalId);
    // }
  }

  openModal(photo: { src: string; alt: string }): void {
    this.isModalOpen = true;
    this.modalImage = photo;
  }

  closeModal(event?: MouseEvent): void {
    // Prevent the modal from closing if the click happens on the modal content
    if (event?.target instanceof HTMLElement && event.target.classList.contains('modal-content')) {
      return;
    }
    this.isModalOpen = false;
    this.modalImage = null;
  }

  scrollLeft(): void {
    const photosContainer = document.querySelector('.photos') as HTMLElement;
    photosContainer.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    const photosContainer = document.querySelector('.photos') as HTMLElement;
    photosContainer.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
