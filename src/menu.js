// Create a Menu object
function createMenu(name, itemsArr) {
    // Set toggle name
    const newMenu = new Menu(name);

    // Set item names
    itemsArr.forEach(item => {
        newMenu.addItem(item);
    });

    renderMenu(newMenu);
}

// Create DOM elements for Menu objects
function renderMenu(menu) {
    const container = document.createElement('div');
    container.setAttribute('class', 'dropdown-menu');

    // Toggle
    const toggle = document.createElement('button');
    toggle.setAttribute('class', 'toggle');
    // textContent and newMenu.name could be ""
    // Instead, style.background-image could be set to the path of an imported icon
    toggle.textContent = menu.name;

    // Content 
    const list = document.createElement('ul');
    list.setAttribute('class', 'content');

    menu.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'item');
        listItem.textContent = item.name;
        list.append(listItem);
    });

    container.append(toggle, list);

    document.body.append(container); // Or, append to another container
}


class Menu {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addItem(name) {
        const newItem = new Item(name);
        this.items.push(newItem);
    }
}

class Item {
    constructor(name) {
        this.name = name;
    }
}

export { createMenu };