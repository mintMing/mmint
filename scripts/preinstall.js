import chalk from "chalk";
  
if (!/pnpm/.test(process.env.npm_execpath || "")) {  
    console.warn(chalk.magenta(`  
       ／＞　 フ  
       | 　_　_|   
      ／\` ミ＿ ミ  
     /　　　　 |  
    /　 ヽ　　 ﾉ  
    │　　|　|　|  
／￣|　|　|　|  
(￣ヽ＿_ヽ_)__)  
＼二)  
    `));  
    console.warn(chalk.red.bold(`  
        ************************************  
        **  🚨  重要提示: 请使用 pnpm!  🚨  **  
        ************************************  
    `));  
    process.exit(1);  
}