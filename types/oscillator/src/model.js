module.exports = {
  order: ['oscillators'],
  views: {
    oscillators: {
      size: -1,
      attributes: ['oscillator'],
    },
  },
  definitions: {
    oscillator: {
      parameters: [
        {
          id: 'type',
          type: 'enum',
          size: 1,
          default: 'periodic',
          domain: {
            Periodic: 'periodic',
            Damped: 'damped',
            Decaying: 'decaying',
          },
        },
        {
          id: 'center',
          type: 'int',
          size: 3,
          layout: '3',
          default: [0, 0, 0],
        },
        {
          id: 'radius',
          type: 'double',
          size: 1,
          default: [1],
        },
        {
          id: 'omega',
          type: 'double',
          size: 1,
          default: [0],
        },
        {
          id: 'zeta',
          type: 'double',
          size: 1,
          show: "type[0] === 'decaying'",
        },
      ],
    },
  },
};