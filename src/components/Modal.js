import React, { useState } from 'react'
import Window from './Window';

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="open-modal-btn"
        onClick={() => setOpen(!open)}>
        ✨ Открыть окно
      </button>
      <Window open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Window>
    </>
  )
}

export default Modal