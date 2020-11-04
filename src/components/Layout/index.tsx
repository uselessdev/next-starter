import { Grid, GridProps } from '@chakra-ui/core'

export function Layout({ children, ...props }: GridProps) {
  return (
    <Grid
      w="100%"
      h="100vh"
      placeItems="center"
      backgroundColor="gray.100"
      {...props}
    >
      {children}
    </Grid>
  )
}
