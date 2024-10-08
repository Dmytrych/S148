import { styled } from '@mui/material';

type TextProductVariantInput = {
  variantName: string;
  selected: boolean;
  onClick?: () => void;
};

export const TextProductVariant = ({
  variantName,
  selected,
  onClick = () => {},
}: TextProductVariantInput) => (
  <TextVariantContainer selected={selected} onClick={onClick}>
    {variantName}
  </TextVariantContainer>
);

export const VariantContainer = styled('div')(
  (props: { selected: boolean }) => ({
    ':hover': {
      border: props.selected
        ? 'var(--global-selected-border)'
        : 'var(--global-hover-border)',
    },
    userSelect: 'none',
    cursor: 'pointer',
    borderRadius: '6px',
    border: props.selected
      ? 'var(--global-selected-border)'
      : 'var(--global-unselected-border)',
    width: 'fit-content',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

const TextVariantContainer = styled(VariantContainer)({
  padding: '0px 10px',
});
