import { isDone } from "../model";
import { h } from "snabbdom";

const itemView = (todo, editing) => {
  // console.log('item/itemView: ', {todo,editing});
  return h(
    "li",
    {
      class: { completed: isDone(todo), editing }
    },
    [
      h("div.view", [
        h("input.toggle", {
          attrs: { type: "checkbox", checked: todo.done },
          on: { change: { toggle: todo.id } }
        }),
        h(
          "label",
          {
            on: {
              dblclick: (e, next) => {
                next({ edit: todo.id });
                // Seems kludgy
                e.target.parentElement.parentElement.lastElementChild.focus();
              }
            }
          },
          todo.name
        ),
        h("button.destroy", { on: { click: { destroy: todo.id } } })
      ]),
      h("input.edit", {
        attrs: { type: "text", value: todo.name },
        on: {
          keydown: (e, next) => {
            if (e.key === "Enter") {
              next({ update: { id: todo.id, text: e.target.value } });
            } else if (e.key === "Escape") {
              next("cancelEditing");
            }
          },
          blur: (e, next) =>
            next({ update: { id: todo.id, text: e.target.value } })
        }
      })
    ]
  );
};

export default itemView;
