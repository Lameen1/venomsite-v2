import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const enterStats = mutation({
    args: {
        playname: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert('statistics', {
            playname: args.playname,
        })
    }
})