import { Footer, Text } from "@mantine/core";

export function FooterBottom() {
  return (
    <Footer height={0} mb={25}>
      <Text size="sm" style={{ marginBottom: '20px', marginLeft:'0.5rem'}}>
        Email: lucas12alfredsson@gmail.com | Phone: 0766377670
      </Text>
    </Footer>
  );
}
