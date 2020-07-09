// import { EventController } from './EventController';
// import { TsoaResponse } from 'tsoa';

// const serverError: TsoaResponse<500, { message: string }> = (
//   status: 500,
//   { message: string }
// ) => {
//   return;
//   'opa';
// };

// const makeSut = (): EventController => {
//   const sut: EventController = new EventController();

//   return sut;
// };

// describe('Event Controller', () => {
//   it('Should return 500 if there is an error in the search for events in the bank', async () => {
//     const sut = makeSut();
//     const response = await sut.index(serverError);
//     console.log('response', response);

//     expect(response).toBe(true);
//   });
// });
