class CarouselStore {
    images = $state([]);
    isOpen = $state(false);
    currentIndex = $state(0);

    register(image) {
        this.images.push(image);
    }

    unregister(id) {
        this.images = this.images.filter((img) => img.id !== id);
    }

    open(id) {
        const index = this.images.findIndex((img) => img.id === id);
        if (index !== -1) {
            this.currentIndex = index;
            this.isOpen = true;
        }
    }

    close() {
        this.isOpen = false;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }

    previous() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
}

export const carouselStore = new CarouselStore();