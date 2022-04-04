import { createHandler, Get, Request } from '@storyofams/next-api-decorators';
import { NextApiRequest } from 'next';

class Handler {
  @Get()
  list(@Request() _req: NextApiRequest) {
    console.log('it works');
  }
}

export default createHandler(Handler);
