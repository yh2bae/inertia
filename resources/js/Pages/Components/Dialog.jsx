import React from 'react'

export default function Dialog({trigger, title, children, size = 'lg'}) {
    return (
        <div ref={trigger} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}>
            <div className={`modal-dialog modal-dialog-centered modal-${size}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">{title}</div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}
