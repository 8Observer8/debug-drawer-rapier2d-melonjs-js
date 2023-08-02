import * as me from "melonjs";
import RAPIER from "rapier2d-compat";
import initRapier2D from "./init-rapier2d.js";
import DebugDrawer from "./debug-drawer.js";

me.device.onReady(
    () => {
        if (!me.video.init(300, 300, {
                parent: "screen",
                renderer: me.video.CANVAS,
                scale: "fit",
                antiAlias: true
            })) //
        {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        async function init() {
            await initRapier2D();

            class Graphics extends me.Renderable {
                constructor() {
                    super(0, 0, me.game.viewport.width, me.game.viewport.height);
                    this.anchorPoint.set(0, 0);

                    const gravity = { x: 0, y: 9.8 };
                    this.world = new RAPIER.World(gravity);
                    this.pixelsPerMeter = 30;

                    this.debugDrawer = new DebugDrawer(this.world, me.game.renderer, this.pixelsPerMeter);

                    // Ground
                    const groundColliderDesc = RAPIER.ColliderDesc.cuboid(130 / this.pixelsPerMeter,
                        20 / this.pixelsPerMeter);
                    groundColliderDesc.setTranslation(150 / this.pixelsPerMeter, 270 / this.pixelsPerMeter);
                    this.world.createCollider(groundColliderDesc);

                    // Box
                    const boxBodyDesc = RAPIER.RigidBodyDesc.dynamic();
                    boxBodyDesc.setTranslation(100 / this.pixelsPerMeter, 30 / this.pixelsPerMeter);
                    boxBodyDesc.setRotation(30 * Math.PI / 180);
                    const boxBody = this.world.createRigidBody(boxBodyDesc);
                    const boxColliderDesc = RAPIER.ColliderDesc.cuboid(30 / this.pixelsPerMeter,
                        30 / this.pixelsPerMeter);
                    boxColliderDesc.setDensity(1);
                    const boxCollider = this.world.createCollider(boxColliderDesc, boxBody);

                    // Circle
                    const circleBodyDesc = RAPIER.RigidBodyDesc.dynamic();
                    circleBodyDesc.setTranslation(200 / this.pixelsPerMeter, 50 / this.pixelsPerMeter);
                    const circleBody = this.world.createRigidBody(circleBodyDesc);
                    const circleColliderDesc = RAPIER.ColliderDesc.ball(20 / this.pixelsPerMeter);
                    circleColliderDesc.setDensity(1);
                    circleColliderDesc.setRestitution(0.9);
                    const circleCollider = this.world.createCollider(circleColliderDesc, circleBody);

                    // Platform
                    const platformColliderDesc = RAPIER.ColliderDesc.cuboid(50 / this.pixelsPerMeter,
                        5 / this.pixelsPerMeter);
                    platformColliderDesc.setTranslation(220 / this.pixelsPerMeter,
                        200 / this.pixelsPerMeter);
                    platformColliderDesc.setRotation(-20 * Math.PI / 180);
                    this.world.createCollider(platformColliderDesc);
                }

                update(dt) {
                    this.world.step();
                    return true;
                }

                draw(renderer) {
                    renderer.clearColor("#000000");
                    renderer.setGlobalAlpha(1);
                    this.debugDrawer.draw();
                }
            }

            me.game.world.addChild(new Graphics());
        }
        init();
    });
