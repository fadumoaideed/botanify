import styled from '@emotion/styled';

export const Flex = styled.div<{
   direction?: 'row' | 'column';
   align?: 'start' | 'center' | 'end';
   justify?: 'start' | 'center' | 'end';
   gap?: string;
}>`
   display: flex;
   flex-direction: ${({ direction }) => direction || 'column'};
   align-items: ${({ align }) => align || 'start'};
   justify-content: ${({ justify }) => justify || 'start'};
   gap: ${({ gap }) => gap || '0'};
`;
