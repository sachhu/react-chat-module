import { Message, OnMessageSend } from "./index";
import React, { useState } from "react";
import style from "./style/SendMessage.scss";
import { FileAttachment } from "./Attachment/FileAttachment";
import { AttachmentPreview } from "./Attachment/AttachmentPreview/AttachmentPreview";
import { Input } from "./Input";

interface Props {
    onSend?: OnMessageSend;
    loadingSpinner?: JSX.Element;
}

export function SendMessage(props: Props) {
    const [attachmentMessage, setAttachmentMessage] = useState<Message | null>(
        null
    );

    const onFileChanged = (file: Message) => {
        setAttachmentMessage(file);
    };

    const onAttachmentPreviewClose = () => {
        setAttachmentMessage(null);
    };

    return (
        <div className={style.message_container}>
            <Input onSend={props.onSend} />
            <FileAttachment onSelectFile={onFileChanged} />
            {attachmentMessage && (
                <AttachmentPreview
                    attachment={attachmentMessage}
                    onCancel={onAttachmentPreviewClose}
                    onSend={props.onSend}
                    loadingSpinner={props.loadingSpinner}
                />
            )}
        </div>
    );
}
