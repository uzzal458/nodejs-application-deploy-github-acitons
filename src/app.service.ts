import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome() {
    return { message: 'Welcome to the Node app deployed with GitHub Actions' };
  }

  getDescription() {
    return {
      name: 'node-app-deploy-gh-actions',
      description: 'A simple NestJS API deployed to AWS EC2 with Docker and GitHub Actions',
    };
  }
}
