enum SnapType {
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
    PART_PICKER = "part_picker",
  }
  
enum ButtonStyle {
    DESTRUCTIVE = "destructive",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
  }
  
enum ActionType {
    REMOTE = "remote",
  }
  


export const firstSnapkit = {
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
}