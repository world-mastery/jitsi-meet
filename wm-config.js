const fs = require('fs');

const interfaceConfigOverwrites = {
    SHOW_JITSI_WATERMARK: false,
    SHOW_WATERMARK_FOR_GUESTS: false,
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
};

fs.readFile('interface_config.js', 'utf8', (err, contents) => {
    let newContents = contents;

    if (err === null) {
        // eslint-disable-next-line guard-for-in
        for (const key in interfaceConfigOverwrites) {
            const value = interfaceConfigOverwrites[key];

            newContents = newContents.replace(new RegExp(`${key}:[^,]*,`, 'g'),
                typeof value === 'string' ? `${key}: '${value}',` : `${key}: ${value},`
            );
            fs.writeFileSync(
                'interface_config.js',
                newContents
            );
        }
    }
});
