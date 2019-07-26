import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { useResizableTable, ResizeValue, getCellWidth } from '.';

const Example = () => {
  const [v, setValues] = React.useState<ResizeValue[]>([]);
  const { ref } = useResizableTable({
    onResize: (e, values) => {
      setValues(values);
    },
  });

  return (
    <table ref={ref}>
      <thead>
        <tr>
          <th style={{ width: getCellWidth(v, 0, 0) }}>
            <input type="checkbox" />
          </th>
          <th colSpan={2} style={{ width: getCellWidth(v, 0, 1) }}>
            Size
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: getCellWidth(v, 1, 0) }}>
            <input type="checkbox" />
          </td>
          <td style={{ width: getCellWidth(v, 1, 1) }} colSpan={2}>
            20Mb
          </td>
        </tr>
        <tr>
          <td style={{ width: getCellWidth(v, 2, 0) }}>
            <input type="checkbox" />
          </td>
          <td style={{ width: getCellWidth(v, 2, 1) }}>10Mb</td>
          <td style={{ width: getCellWidth(v, 2, 2) }}>Sample Description</td>
        </tr>
      </tbody>
    </table>
  );
};
storiesOf('Example', module).add('example', () => <Example />);
