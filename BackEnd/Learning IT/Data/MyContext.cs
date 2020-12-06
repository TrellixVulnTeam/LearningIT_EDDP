using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Learning_IT.Models
{
    public class MyContext : IdentityDbContext
    {

        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Tabela de legaturin dintre user si role. Many-To-Many
            #region
            modelBuilder.Entity<UserRole>()
                    .HasKey(ur => new { ur.UserId, ur.RoleId });

                modelBuilder.Entity<UserRole>()
                    .HasOne<User>(ur => ur.User)
                    .WithMany(u => u.UserRoles)
                    .HasForeignKey(ur => ur.UserId);
                modelBuilder.Entity<UserRole>()
                    .HasOne<Role>(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId);
            #endregion

            // Constraint pentru tabela de Article. Un user poate sa aiba mai multe articole - un articol apartine doar unui user.
            #region 
                modelBuilder.Entity<Article>()
                    .HasOne<User>(a => a.User)
                    .WithMany(u => u.Articles)
                    .HasForeignKey(a => a.Id);
            #endregion


            //Constraint-uri pentru tabelele Course si User - Many-To-Many
            #region 
                modelBuilder.Entity<UserCourse>()
                    .HasKey(uc => new { uc.UserId, uc.CourseId });
                modelBuilder.Entity<UserCourse>()
                    .HasOne<User>(uc => uc.User)
                    .WithMany(u => u.UserCourses)
                    .HasForeignKey(uc => uc.UserId);
                modelBuilder.Entity<UserCourse>()
                    .HasOne<Course>(uc => uc.Course)
                    .WithMany(c => c.UserCourses)
                    .HasForeignKey(ur => ur.CourseId);
            #endregion


            #region
            //Constraint pentru tabela Chapter - un curs poate sa aiba mai multe capitole
            //One-To-Many
                modelBuilder.Entity<Chapter>()
                        .HasOne<Course>(ch => ch.Course)
                        .WithMany(c => c.Chapters)
                        .HasForeignKey(ch => ch.Id);
            #endregion

            #region
             //Examen la capitol - One-To-One
                modelBuilder.Entity<Exam>()
                    .HasOne<Chapter>(e => e.Chapter)
                    .WithOne(ch => ch.Exam)
                    .HasForeignKey<Chapter>(ch => ch.Id);

            #endregion

            #region
            //Intrebari la examen -  Many-To-Many 
                modelBuilder.Entity<QuestionExam>()
                    .HasKey(qe => new { qe.ExamId, qe.QuestionId });
                modelBuilder.Entity<QuestionExam>()
                    .HasOne<Question>(qe => qe.Question)
                    .WithMany(q => q.QuestionExams)
                    .HasForeignKey(qe => qe.QuestionId);
                modelBuilder.Entity<QuestionExam>()
                    .HasOne<Exam>(qe => qe.Exam)
                    .WithMany(e => e.QuestionExams)
                    .HasForeignKey(qe => qe.ExamId);
            #endregion

            #region
            //Raspunsuri la intrebari - Many-to-Many
            modelBuilder.Entity<AnswerQuestion>()
                .HasKey(aq => new { aq.AnswerId, aq.QuestionId });
            modelBuilder.Entity<AnswerQuestion>()
                .HasOne<Question>(aq => aq.Question)
                .WithMany(q => q.AnswerQuestions)
                .HasForeignKey(aq => aq.QuestionId);
            modelBuilder.Entity<AnswerQuestion>()
                .HasOne<Answer>(aq => aq.Answer)
                .WithMany(a => a.AnswerQuestions)
                .HasForeignKey(aq => aq.AnswerId);
            #endregion
        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<UserCourse> UserCourses { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Chapter> Chapters { get; set; }
        public DbSet<Exam> Exams { get; set; }
        public DbSet<QuestionExam> QuestionExams { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<AnswerQuestion> AnswerQuestions { get; set; }
        public DbSet<Answer> Answers { get; set; }


    }
}
