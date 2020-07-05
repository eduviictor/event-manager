interface RespTest {
  text: string;
}

class EventController {
  public index(req, res): RespTest {
    return res.json({ text: 'Opa' });
  }
}

export default new EventController();
