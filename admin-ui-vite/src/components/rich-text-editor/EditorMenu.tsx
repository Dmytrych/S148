import ButtonGroup from '@mui/material/ButtonGroup'
import {ToolbarButtonStyled} from './RichTextEditor.styled.js'
import {
  AddLink,
  DataObject, FormatAlignCenter, FormatAlignJustify,
  FormatAlignLeft, FormatAlignRight,
  FormatBold,
  FormatItalic, FormatListBulleted, FormatListNumbered,
  FormatStrikethrough,
  FormatUnderlined, InsertPhoto, LinkOff, Redo, Undo
} from '@mui/icons-material'
import {Button, SelectChangeEvent, Stack} from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import PopoverInput from "../ui/PopoverInput.tsx";
import {Editor} from "@tiptap/react";
import PopoverFileSelect from "../articles/PopoverFileSelect.tsx";
import {ApiImage} from "../../api/DTO/common/images.ts";
import {getImageUrl} from "../../utils/image-url.ts";
import {constructSrcSet} from "../../utils/srcset-construction.ts";

type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6

type HeadingEntry = {
  value: Level;
  label: string;
}

const HEADINGS: HeadingEntry[] = [
  { value: 0, label: 'Normal text' },
  { value: 1, label: 'Heading 1' },
  { value: 2, label: 'Heading 2' },
  { value: 3, label: 'Heading 3' },
  { value: 4, label: 'Heading 4' },
  { value: 5, label: 'Heading 5' },
  { value: 6, label: 'Heading 6' }
]

type EditorMenuProps = {
  editor: Editor;
  imagesToSelect: ApiImage[];
}

const EditorMenu = ({ editor, imagesToSelect }: EditorMenuProps) => {
  const setLink = (url: string) => {
    if (url === null) {
      return
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  const addImage = (image: ApiImage) => {
    if (image?.attributes.url) {
      editor.chain().focus().setImage({ src: getImageUrl(image?.attributes.url), srcset: constructSrcSet(image.attributes.formats) }).run()
    }
  }

  const handleHeadingChange = (event: SelectChangeEvent<Level>) => {
    const selectedValue = event.target.value
    if (typeof selectedValue === 'string' || selectedValue === 0) {
      const selectedLevel = editor.getAttributes('heading').level
      return editor.chain().focus().toggleHeading({ level: selectedLevel }).run()
    }
    return editor.chain().focus().setHeading({ level: selectedValue }).run()
  }

  return (
    <Stack direction='row' spacing={1} sx={{ overflowX: 'auto' }}>
      <ButtonGroup variant='outlined'>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
        >
          <FormatBold/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
        >
          <FormatItalic/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
        >
          <FormatStrikethrough/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
        >
          <DataObject/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive('underline')}
        >
          <FormatUnderlined/>
        </ToolbarButtonStyled>
      </ButtonGroup>
      <ButtonGroup>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
        >
          <FormatAlignLeft/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
        >
          <FormatAlignCenter/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
        >
          <FormatAlignRight/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          isActive={editor.isActive({ textAlign: 'justify' })}
        >
          <FormatAlignJustify/>
        </ToolbarButtonStyled>
      </ButtonGroup>
      <ButtonGroup>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
        >
          <FormatListBulleted/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
        >
          <FormatListNumbered/>
        </ToolbarButtonStyled>
      </ButtonGroup>
      <ButtonGroup>
        <PopoverInput
          placeholder='Insert a link here'
          getDefaultValue={() => editor.getAttributes('link').href}
          renderButton={(props) => (
            <ToolbarButtonStyled {...props} isActive={editor.isActive('link')}>
              <AddLink/>
            </ToolbarButtonStyled>
          )}
          onSubmit={setLink}
        />
        <ToolbarButtonStyled isActive={false} onClick={() => editor.chain().focus().unsetLink().run()} >
          <LinkOff/>
        </ToolbarButtonStyled>
      </ButtonGroup>
      <ButtonGroup>
        <PopoverFileSelect
          images={imagesToSelect}
          renderButton={(props) => (
            <Button {...props}>
              <InsertPhoto/>
            </Button>
          )}
          onSelect={addImage}/>
      </ButtonGroup>
      <Select
        variant='outlined'
        value={editor.isActive('heading') ? editor.getAttributes('heading').level : 0}
        label='Text Format'
        onChange={handleHeadingChange}
      >
        {
          HEADINGS.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)
        }
      </Select>
      <ButtonGroup>
        <ToolbarButtonStyled isActive={false} onClick={() => editor.chain().focus().undo().run()} >
          <Undo/>
        </ToolbarButtonStyled>
        <ToolbarButtonStyled isActive={false} onClick={() => editor.chain().focus().redo().run()} >
          <Redo/>
        </ToolbarButtonStyled>
      </ButtonGroup>
    </Stack>
  )
}

export default EditorMenu
