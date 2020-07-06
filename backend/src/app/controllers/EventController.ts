import {
  Controller,
  Get,
  Route,
  Path,
  Post,
  Body,
  Put,
  Res,
  TsoaResponse,
  Delete,
} from 'tsoa';
import Event, { EventAttributes, EventAttributesBody } from '../models/Event';

@Route('events')
export class EventController extends Controller {
  @Get('')
  public async index(
    @Res() serverError: TsoaResponse<500, { message: string }>
  ): Promise<EventAttributes[]> {
    try {
      const events: EventAttributes[] = await Event.findAll();

      return events;
    } catch (err) {
      serverError(500, { message: 'Internal Server Error' });
    }
  }

  @Get('{codigo}')
  public async show(
    @Path() codigo: number,
    @Res() serverError: TsoaResponse<500, { message: string }>,
    @Res() notFound: TsoaResponse<404, { message: string }>
  ): Promise<EventAttributes> {
    try {
      const event: EventAttributes = await Event.findByPk(codigo);

      if (!event) {
        notFound(404, { message: 'Event not exists' });
      }

      return event;
    } catch (err) {
      serverError(500, { message: 'Internal Server Error' });
    }
  }

  @Post('')
  public async store(
    @Body() body: EventAttributesBody
  ): Promise<EventAttributes> {
    const event: EventAttributes = await Event.create(body);

    return event;
  }

  @Put('{codigo}')
  public async update(
    @Path() codigo: number,
    @Body() body: EventAttributesBody,
    @Res() serverError: TsoaResponse<500, { message: string }>,
    @Res() notFound: TsoaResponse<404, { message: string }>
  ): Promise<string> {
    try {
      const event = await Event.update(body, {
        where: { codigo: codigo },
      });

      if (event[0] !== 1) {
        notFound(404, { message: 'Event not exists' });
      }

      return 'Event updated with success';
    } catch (err) {
      serverError(500, { message: 'Internal Server Error' });
    }
  }

  @Delete('{codigo}')
  public async delete(
    @Path() codigo: number,
    @Res() serverError: TsoaResponse<500, { message: string }>,
    @Res() notFound: TsoaResponse<404, { message: string }>
  ): Promise<string> {
    try {
      const event = await Event.destroy({
        where: { codigo: codigo },
      });

      console.log('event', event);

      if (event !== 1) {
        notFound(404, { message: 'Event not exists' });
      }

      return 'Event deleted with success';
    } catch (err) {
      serverError(500, { message: 'Internal Server Error' });
    }
  }
}
