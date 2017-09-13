import React from 'react';
import ReactDOM from 'react-dom';
const Table = ({n}) => <table>
  <tbody>
    {
      Array.from({length: n})
        .map((e, row) => <tr>
          {
            Array.from({length: n})
              .map((e, col) => <td>
                {(row + col) % 2 ? 'Blue' : 'Yellow'}
              </td>)
          }
        </tr>)
    }
  </tbody>
</table>;

ReactDOM.render(
  <Table n={5} />,
  document.getElementById('root-ex-2')
);
