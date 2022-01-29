/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DidConnect from '@arcblock/did-connect/lib/Connect';

import Button from '@arcblock/ux/lib/Button';
import { useSessionContext } from '../libs/session';

export default function SendWithoutLogin({ children }) {
  const [open, setOpen] = useState(false);
  const { api } = useSessionContext();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="large"
        target="_blank"
        onClick={() => setOpen(true)}
        className="action">
        {children}
      </Button>
      <DidConnect
        popup
        open={open}
        action="notification"
        checkFn={api.get}
        checkTimeout={10 * 60 * 1000}
        messages={{
          scan: 'Send notification',
          success: 'success',
        }}
        onSuccess={() => {
          setTimeout(() => setOpen(false), 1000)
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

SendWithoutLogin.propTypes = {
  children: PropTypes.any.isRequired,
};

SendWithoutLogin.defaultProps = {
};
