const gulp = require("gulp");
const series = gulp.series;

// series para executar tarefas em serie
/* parallel para executar tarefas paralelamentes
(porém ele só executará as outras quando
finalizar as tarefas paralelas)*/

const antes1 = (callback) => {
  console.log("Tarefa Antes 1!");
  return callback();
};
const antes2 = (callback) => {
  console.log("Tarefa Antes 2!");
  return callback();
};

function copiar(callback) {
  /*  gulp
    .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])*/

  gulp.src("pastaA/**/*.txt").pipe(gulp.dest("pastaB")); // busca especifica, e colocando numa pasta distinta apenas arquivos com um determinada extensão
  /*  .pipe(imagePelaMetade())
    .pipe(imageEmPretoEBranco())
    .pipe(transformacaoA())
    .pipe(transformacaoB())
    .pipe(transformacaoC());
*/
  return callback();
}
const fim = (callback) => {
  console.log("Tarefa Fim!");
  return callback();
};
module.exports.default = series(antes1, antes2, copiar, fim);
