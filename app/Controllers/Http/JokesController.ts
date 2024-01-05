import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

type Joke = {
  id: number;
  title: string;
  joke: string;
};
export default class JokesController {
  jokes: Joke[] = [
    {
      id: 1,
      title: "Joke 1",
      joke: "This is the first joke",
    },
    {
      id: 2,
      title: "Joke 2",
      joke: "This is the second joke",
    },
  ];
  public async index(ctx: HttpContextContract) {

    return {
      jokes: this.jokes,
      route :  ctx.route
    };
  }

  public async show(ctx: HttpContextContract) {
    const joke = this.jokes.find((joke) => joke.id === Number(ctx.params.id));
    return joke;
  }

  public async store(ctx: HttpContextContract) {
    console.log(ctx.request.all());
    console.log(ctx.request.body());
    const { id, title, joke } = ctx.request.all();
    const newJoke: Joke = {
      id,
      title,
      joke,
    };
    this.jokes.push(newJoke);
    return this.jokes;
  }
}
