import React from 'react';
import { Button } from 'semantic-ui-react';

export default function ButtonComponent({ type, text }) {
  return (
    <div>
      <Button type = { type }>
     { text }
      </Button>
    </div>
  );
}
