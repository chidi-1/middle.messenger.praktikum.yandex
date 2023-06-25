import {IValidable} from "../components/input/input";
import {FormBlock} from "../components/formBlocks/formBlock";
import {Form} from "../components/form/form";
import {ChatMessage} from "../base/chat/ChatAPI";
import {ChatMessageTemplateData} from "../components/chat/chatContent";

export function validateForm(form: Form) {
    let isValidateSuccess = true;
    form.setProps({'iValid': true});

    for (const children of Object.values(form.children)) {
        const ivalidatble = (children as any as IValidable);
        if (ivalidatble.isValid !== undefined) {
            ivalidatble.validate();
            if (!(ivalidatble as FormBlock).isValid()) {
                isValidateSuccess = false;
                form.setProps({'iValid': false});
            }
        }
    }

}

export function submitForm(form: Form) {
    if (form.isValid()) {
        const submitData: Record<string, string> = {};
        for (const children of Object.values(form.children)) {
            const ivalidatble = (children as any as IValidable);
            if (ivalidatble.isValid !== undefined) {
                submitData[(ivalidatble as FormBlock).getName()] = (ivalidatble as FormBlock).getValue();
            }
        }
    }
}

export function convertToChatMessagesTemplateData (chatMessages:ChatMessage[]): ChatMessageTemplateData[]{
    let chatMessageTemplateData:ChatMessageTemplateData[] = [];

    let prevDate: Date = chatMessages[0].time
    let messagesPerMinite: string[] = [];
    chatMessageTemplateData.push({
        separator: true,
        date: `${prevDate.toLocaleString('ru-Ru', {month: "long"})} ${prevDate.getDate()}`
    })

    for (let message of chatMessages) {
        let currentDate = message.time;

        if (currentDate.toDateString() != prevDate.toDateString()) {
            chatMessageTemplateData.push({
                separator: true,
                date: `${currentDate.toLocaleString('ru-Ru', {month: "long"})} ${currentDate.getDate()}`
            })
        } else {
            if (prevDate.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }) == currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})) {
                messagesPerMinite.push(message.content);
            } else {
                if (!messagesPerMinite.length) {
                    messagesPerMinite.push(message.content);
                }

                chatMessageTemplateData.push({
                    separator: false,
                    time: currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
                    content: messagesPerMinite,
                })
                messagesPerMinite = [];
            }
        }
        prevDate = currentDate;
    }

    return chatMessageTemplateData;
}
