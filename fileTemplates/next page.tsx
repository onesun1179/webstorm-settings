#set( $CAMEL_NAME = $NAME.substring(0, 1).toUpperCase() + $NAME.substring(1) )
/**
 * @ko ${KO}
 * @en ${NAME}
 */
import { NextPage } from 'next';
export interface ${CAMEL_NAME}Props {}

const ${CAMEL_NAME}: NextPage<${CAMEL_NAME}Props> = ({}) => {
    return (
        <div>
            ${KO}            
        </div>
    );
};

${CAMEL_NAME}.displayName = '${CAMEL_NAME}';

export default ${CAMEL_NAME};
