declare enum SnapType {
    LAYOUT = "layout",
    BUTTON = "button",
    ACTIONS = "actions",
    FORM = "form",
    INPUT_LAYOUT = "input_layout",
    CONTENT = "content",
    PLAIN_TEXT = "plain_text",
    IMAGE = "image",
    STATIC_SELECT = "static_select",
    MULTIPLE_STATIC_SELECT = "multi_static_select",
    RADIO_BUTTONS = "radio_buttons",
    CHECKBOXES = "checkboxes",
    PLAIN_TEXT_INPUT = "plain_text_input",
    NUMBER_INPUT = "number_input",
    EMAIL_TEXT_INPUT = "email_text_input",
    CARD = "card",
    DIVIDER = "divider",
    TOGGLE = "toggle",
    UPLOAD = "upload",
    TAG_PICKER = "tag_picker",
    USER_PICKER = "user_picker",
    PART_PICKER = "part_picker"
}
export declare const firstSnapkit: {
    snaps: {
        elements: {
            element: {
                action_id: string;
                options: {
                    text: {
                        text: string;
                        type: SnapType;
                    };
                    value: string;
                }[];
                placeholder: {
                    text: string;
                    type: SnapType;
                };
                type: SnapType;
            };
            label: {
                text: string;
                type: SnapType;
            };
            type: SnapType;
        }[];
        title: {
            text: string;
            type: SnapType;
        };
        type: SnapType;
    }[];
};
export {};
