import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { classNames } from '@/shared/utils/classNames';

import cls from './CodeBlock.module.scss';

interface CodeBlockProps {
    text: string;
    className?: string;
}

export const CodeBlock = ({ text, className }: CodeBlockProps) => {
    const onCopyButtonClick = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <pre className={classNames(cls.codeBlock, {}, [className])}>
            <Button className={cls.copyButton} onClick={onCopyButtonClick}>
                <Icon Svg={CopyIcon} />
            </Button>

            <code className={cls.code}>{text}</code>
        </pre>
    );
};
