import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faParagraph,
  faList,
  faQuoteRight,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Tiptap.scss";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";

// define your extension array
const extensions = [
  StarterKit.configure({
    blockquote:{
      HTMLAttributes: {
        class: 'blockQuote',
      },
    }
  }),
  Underline,
  TextStyle,
  Color,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];

// const content = "<p>Hello World!</p>";

const Tiptap = ({ updateHTML }) => {
  const editor = useEditor({
    extensions,
    content: ``,
    autofocus: true,
  });

  return (
    <>
      <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={!editor.can().chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faUnderline} className="icon" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faStrikethrough} />
          </button>

          <span>|</span>

          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faParagraph} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <strong>H1</strong>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            <strong>H2</strong>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            <strong>H3</strong>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }
          >
            <strong>H4</strong>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }
          >
            <strong>H5</strong>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }
          >
            <strong>H6</strong>
          </button>
          <div className="nested-btn-group">
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={
                editor.isActive({ textAlign: "left" }) ? "is-active" : ""
              }
            >
              <img src="/justify-left-svgrepo-com.svg" alt="left-justify" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={
                editor.isActive({ textAlign: "center" }) ? "is-active" : ""
              }
            >
              <img src="/justify-center-svgrepo-com.svg" alt="left-justify" />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={
                editor.isActive({ textAlign: "right" }) ? "is-active" : ""
              }
            >
              <img src="/justify-right-svgrepo-com.svg" alt="left-justify" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              className={
                editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
              }
            >
              <img src="/justify-fill-svgrepo-com.svg" alt="left-justify" />
            </button>
          </div>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <img src="/list-ol-svgrepo-com.svg" width="16rem" alt="" />
          </button>

          <span>|</span>

          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faQuoteRight} />
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <img src="/horizontal-rule-svgrepo-com.svg" width="16rem" alt="" />
          </button>
          <button onClick={() => editor.chain().focus().setHardBreak().run()}>
            <img src="/format-separator-svgrepo-com.svg" width="16rem" alt="" />
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <FontAwesomeIcon icon={faRotateLeft} flip="horizontal" />
          </button>
          <button
            onClick={() => {
              if (!editor.isActive("textStyle", { color: "#F98181" })) {
                editor.chain().focus().setColor("#F98181").run();
              } else {
                editor.chain().focus().setColor("#000000").run();
              }
            }}
            className={`colorBtn-red ${
              editor.isActive("textStyle", { color: "#F98181" })
                ? "is-active"
                : ""
            }`}
          >
          </button>
          <button
            onClick={() => {
              if (!editor.isActive("textStyle", { color: "#4fd6be" })) {
                editor.chain().focus().setColor("#4fd6be").run();
              } else {
                editor.chain().focus().setColor("#000000").run();
              }
            }}
            className={`colorBtn-green ${
              editor.isActive("textStyle", { color: "#4fd6be" })
                ? "is-active"
                : ""
            }`}
          >
          </button>
          <button
            onClick={() => {
              if (!editor.isActive("textStyle", { color: "#bb9af7" })) {
                editor.chain().focus().setColor("#bb9af7").run();
              } else {
                editor.chain().focus().setColor("#000000").run();
              }
            }}
            className={`colorBtn-purple ${
              editor.isActive("textStyle", { color: "#bb9af7" })
                ? "is-active"
                : ""
            }`}
          >
          </button>
        </div>
      </div>
      <EditorContent className="editor" editor={editor} />
      <button
        id="saveBtn"
        onClick={() => {
          const html = editor.getHTML();
          updateHTML(html);
        }}
      >
        Save
      </button>
    </>
  );
};

export default Tiptap;
