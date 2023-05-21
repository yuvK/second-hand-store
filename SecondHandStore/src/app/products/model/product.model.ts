class Product {
    constructor(
        public id = 0,
        public name = '',
        public description = '',
        public picture = '',
        public price = 0,
        public city = '',
        public phoneNumber = '',
        public publishDate = new Date()
    ) { }
    public getShrtendPicture(): string {
        const maxLength = 20;
        if (this.picture.length > maxLength) {
            return this.picture.substring(0, maxLength) + '...';
        }
        return this.picture;
    }
}

export default Product;
