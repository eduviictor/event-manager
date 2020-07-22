import supertest from 'supertest';
import app from '../../app';

export const request = supertest(app);

export const deleteMany = async (array: Array<any>) => {
  array.forEach(async (item) => {
    await item.destroy({ where: {} });
  });
};
