import React from "react";
import {Center, Image, Box} from '@chakra-ui/react'
import {motion} from "framer-motion";

const Animation = () => {

    return (
        <Box>

            <Center height='10vh'>
                <motion.div
                    as={motion.div}
                    animate={{
                        scale: [1, 5, 1]
                    }}
                    transition={{duration: 6.0, repeat: Infinity}}
                >
                    The end
                </motion.div>
            </Center>
            <Center height='60vh'>
                <motion.div
                    as={motion.div}
                    animate={{
                        scale: [1, 2, 2, 1],
                        rotate: [0, 0, 360, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{duration: 6.0, repeat: Infinity}}
                    style={{
                        width: '100px',
                        height: '100px',
                        overflow: 'hidden'
                    }}
                >
                    <Image
                        src="https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif"
                        width='100%'
                        height='100%'
                        objectFit="cover"
                    />
                </motion.div>
            </Center>
        </Box>
    )
}

export default Animation;