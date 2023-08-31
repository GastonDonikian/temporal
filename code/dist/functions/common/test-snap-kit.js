"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstSnapkit = void 0;
var SnapType;
(function (SnapType) {
    SnapType["LAYOUT"] = "layout";
    SnapType["BUTTON"] = "button";
    SnapType["ACTIONS"] = "actions";
    SnapType["FORM"] = "form";
    SnapType["INPUT_LAYOUT"] = "input_layout";
    SnapType["CONTENT"] = "content";
    SnapType["PLAIN_TEXT"] = "plain_text";
    SnapType["IMAGE"] = "image";
    SnapType["STATIC_SELECT"] = "static_select";
    SnapType["MULTIPLE_STATIC_SELECT"] = "multi_static_select";
    SnapType["RADIO_BUTTONS"] = "radio_buttons";
    SnapType["CHECKBOXES"] = "checkboxes";
    SnapType["PLAIN_TEXT_INPUT"] = "plain_text_input";
    SnapType["NUMBER_INPUT"] = "number_input";
    SnapType["EMAIL_TEXT_INPUT"] = "email_text_input";
    SnapType["CARD"] = "card";
    SnapType["DIVIDER"] = "divider";
    SnapType["TOGGLE"] = "toggle";
    SnapType["UPLOAD"] = "upload";
    SnapType["TAG_PICKER"] = "tag_picker";
    SnapType["USER_PICKER"] = "user_picker";
    SnapType["PART_PICKER"] = "part_picker";
})(SnapType || (SnapType = {}));
var ButtonStyle;
(function (ButtonStyle) {
    ButtonStyle["DESTRUCTIVE"] = "destructive";
    ButtonStyle["PRIMARY"] = "primary";
    ButtonStyle["SECONDARY"] = "secondary";
    ButtonStyle["TERTIARY"] = "tertiary";
})(ButtonStyle || (ButtonStyle = {}));
var ActionType;
(function (ActionType) {
    ActionType["REMOTE"] = "remote";
})(ActionType || (ActionType = {}));
exports.firstSnapkit = {
    snaps: [
        {
            elements: [
                {
                    element: {
                        action_id: "Category",
                        options: [
                            {
                                text: {
                                    text: "Yes",
                                    type: SnapType.PLAIN_TEXT,
                                },
                                value: "yes",
                            },
                            {
                                text: {
                                    text: "No",
                                    type: SnapType.PLAIN_TEXT,
                                },
                                value: "no",
                            },
                        ],
                        placeholder: {
                            text: "--None--",
                            type: SnapType.PLAIN_TEXT,
                        },
                        type: SnapType.STATIC_SELECT,
                    },
                    label: {
                        text: "Category",
                        type: SnapType.PLAIN_TEXT,
                    },
                    type: SnapType.INPUT_LAYOUT,
                },
            ],
            title: {
                text: "Fill in the creation Fields",
                type: SnapType.PLAIN_TEXT,
            },
            type: SnapType.CARD,
        },
    ]
};
