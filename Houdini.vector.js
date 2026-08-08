export function HOUDINI_VECTOR(frame){
    return {
        x: Math.sin(frame * 0.05),
        y: Math.cos(frame * 0.05),
        z: Math.sin(frame * 0.03),
        frame
    };
}
