# Image Upload Services App

## Overview

The **Image Upload Services App** is a web application designed to demonstrate and compare image upload functionalities using three different cloud storage services: **UploadThing**, **Edge Store**, and **Cloudinary**. This application allows users to seamlessly upload, store, and manage their images using these services.

## Features

- **Multi-Service Support**: Easily upload images to UploadThing, Edge Store, and Cloudinary.
- **User-Friendly Interface**: Simple and intuitive design for a smooth user experience.
- **Cross-Platform Compatibility**: Works across various devices and browsers.
- **Secure Storage**: Ensure your images are stored securely with leading cloud services.

## Installation

To get started with the **Image Upload Services App**, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/muhammadderic/image-upload-services-app.git
    cd image-upload-services-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file:**

    Add your API keys and configurations for UploadThing, Edge Store, and Cloudinary.

    ```plaintext
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
    NEXT_PUBLIC_CLOUDINARY_API_KEY=your-cloudinary-api-key
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret
    EDGE_STORE_ACCESS_KEY=your-edge-store-key
    EDGE_STORE_SECRET_KEY=your-edge-store-secret-key
    UPLOADTHING_APP_ID=your-uploadthing-api-id
    UPLOADTHING_SECRET=your-uploadthing-secret-key
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

    Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Usage

1. Open the app in your browser.
2. Select the cloud service you want to use for uploading images.
3. Upload your image using the provided interface.
4. The uploaded image's URL will be displayed, allowing you to view or manage it as needed.

## Screenshots

<div style="display: flex; justify-content: space-between;">
    <img src="./public//image upload services app main.png" alt="Other Page" width="45%" />
    <img src="./public/image upload services app example.png" alt="Main App Page" width="45%" />
</div>

*Main App Page (left) and Other Page (right)*

## Technologies Used

- **Next.js** - A React framework for server-side rendering and static site generation.
- **Tailwind CSS** - A utility-first CSS framework for designing custom user interfaces.
- **Cloudinary** - A cloud service for image and video management.
- **UploadThing** - A cloud storage service for file uploads.
- **Edge Store** - Another cloud storage option for scalable file management.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push your branch.
4. Open a pull request to have your changes reviewed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **GitHub**: [muhammadderic](https://github.com/muhammadderic/image-upload-services-app)
