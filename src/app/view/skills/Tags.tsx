import React from 'react';

import Chip from '@mui/material/Chip';
import { MdCheck, MdClose } from 'react-icons/md';

import Anim from '../asset/Anim';
import * as UTypes from '../../util/Types';

const VSkillsTags = ({ tagsBase, tags, onFilter }: Props) => {
    const items = [];
    for (let i = 0; i < tagsBase.length; i++) {
        const group = tagsBase[i];
        const active = tags.includes(group.id);
        items.push(
            <React.Fragment key={group.id}>
                <Anim anim='fadeInUp' delay={0.5 + 0.2 * i}>
                    <Chip
                        label={group.label}
                        onClick={() => onFilter(group.id)}
                        color='primary'
                        variant={active ? 'filled' : 'outlined'}
                        icon={active ? <MdCheck /> : <MdClose />}
                    />
                </Anim>
            </React.Fragment>
        );
    }
    return <React.Fragment>{items}</React.Fragment>;
};

type Props = {
    tags: string[];
    tagsBase: UTypes.skillTags[];
    onFilter: (id: string) => void;
};

export default VSkillsTags;
