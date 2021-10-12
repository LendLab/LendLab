import React from "react";
import { Stack, Image, Icon } from "@chakra-ui/react";
import { Text } from "@ui";
import { Trash } from "@icons";

export const CartItem = ({
  id,
  nombre,
  desc,
  src,
  deleteMaterialFromCart,
  notShowTrash,
  ...props
}) => {
  return (
    <Stack alignItems="center" direction="row" overflow="hidden" {...props}>
      <Image
        borderRadius="14px"
        boxSize="80px"
        fallbackSrc="/images/fallback.jpg"
        objectFit="cover"
        src={src}
      />
      <Stack spacing={0} w="full">
        <Stack direction="row" justifyContent="space-between" w="full">
          <Text color="black" fontSize="2" fontWeight="bold" textAlign="left">
            {nombre}
          </Text>
          {!notShowTrash && (
            <Icon
              as={Trash}
              cursor="pointer"
              h="none"
              variant="secondary"
              w="none"
              onClick={(e) => deleteMaterialFromCart(id)}
            />
          )}
        </Stack>

        <Text fontSize="2" maxW={200} noOfLines={2} textAlign="left">
          {desc}
        </Text>
      </Stack>
    </Stack>
  );
};
