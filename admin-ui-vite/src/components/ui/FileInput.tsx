interface FileInputProps {
  onChange?: (file: File | null) => void;
}

export default function FileInput({ onChange }: FileInputProps) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(event) => {
        const file = event.target.files?.[0];
        onChange?.(file || null);
      }}
    />
  );
}
