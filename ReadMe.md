# PDF Merger Project

This project is a Node.js application that merges PDF files into a single document. The project has been dockerized for easy deployment and isolation.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)
  - [Building the Docker Image](#building-the-docker-image)
  - [Running the Docker Container](#running-the-docker-container)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js and npm installed ([https://nodejs.org/](https://nodejs.org/))
- Docker installed ([https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pdf-merger.git
   ```

2. Change into the project directory:

   ```bash
   cd pdf-merger
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Add your base64-encoded PDF strings to the `base64Array` in the `index.js` file.
2. Run the Node.js application:

   ```bash
   npm start
   ```

   This will merge the provided PDFs and output the result.

## Docker

### Building the Docker Image

Build the Docker image using the provided Dockerfile:

```bash
docker build -t pdf-merger .
```
