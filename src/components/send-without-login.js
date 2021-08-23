/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DidConnect from '@arcblock/did-connect/lib/Connect';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
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
      {open && (
        <Dialog
          open
          disableBackdropClick
          disableEscapeKeyDown>
          <DialogContent>
            <DidConnect
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
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

SendWithoutLogin.propTypes = {
  children: PropTypes.any.isRequired,
};

SendWithoutLogin.defaultProps = {
};
