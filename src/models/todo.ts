class Todo {

  private _id: string;
  private _text: string;

  public constructor(todoText: string) {
    this._text = todoText;
    this._id = new Date().toISOString()
  }

  public get id() {
    return this._id;
  }
  
  public get text() {
    return this._text;
  }
  
  
};

export default Todo;