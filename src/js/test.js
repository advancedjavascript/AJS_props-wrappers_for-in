import orderByProps from './app';

test('correct properties -> ["name", "level"]', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

    const expected = [
        { key: "name", value: "мечник" },
        { key: "level", value: 2 },
        { key: "attack", value: 80 },
        { key: "defence", value: 40 },
        { key: "health", value: 10 }
    ];
    const recieved = orderByProps(obj, ["name", "level"]);

    expect(recieved).toStrictEqual(expected);
});