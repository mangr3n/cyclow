import itemView from "./item";
import { isDone, isNotDone, allDone } from "../model";
import { h } from 'snabbdom';

const filter = (filterName, items) =>
  ({
    "": items => items,
    active: items => items.filter(isNotDone),
    completed: items => items.filter(isDone)
  }[filterName](items));

const itemsViews = (items, filterName, editing) =>
  filter(filterName, items).map(i => itemView(i, i.id === editing));

const listView = ({ items, editing, filter }) =>
  h("section.main", [
    h("input.toggle-all", {
      attrs: { type: "checkbox", checked: allDone(items) },
      on: { change: "toggleAll" }
    }),
    h("label", {
      attrs: { for: "toggle-all" },
      style: { display: "none" }
    }),
    h("ul.todo-list", itemsViews(items, filter, editing))
  ]);

export default listView;
