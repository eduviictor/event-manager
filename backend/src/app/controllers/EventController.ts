interface RespTest {
  text: string;
}

class EventController {
  test(req, res): RespTest {
    return res.json({ text: 'Opa' });
  }
}
