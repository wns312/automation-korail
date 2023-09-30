class TicketingApp {

  async run() {
    console.log("hello world!");

  }
}

if (require.main == module) {
  (async ()=>{
    await new TicketingApp().run()
  })()
}
